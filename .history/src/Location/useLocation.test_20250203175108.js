import { renderHook, act } from "@testing-library/react";
import useLocation from "./Location";
import useStore from "../useStore";

jest.mock("../useStore");

describe("useLocation", () => {
    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    test("باید موقعیت مکانی را از API دریافت کرده و در store ذخیره کند", async () => {
        const mockLocationData = { city: "Tehran", country: "IR" };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockLocationData),
            })
        );

        const setDataLocationMock = jest.fn();
        useStore.mockReturnValue({ setDataLocation: setDataLocationMock });

        await act(async () => {
            renderHook(() => useLocation());
        });

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("https://ipinfo.io/json?token=698d259085b0ae");

        expect(setDataLocationMock).toHaveBeenCalledWith(mockLocationData);
    });

    test("باید هنگام شکست در درخواست، مقدار error را برگرداند", async () => {
        global.fetch = jest.fn(() => Promise.reject(new Error("Network Error")));

        // Mock کردن useStore
        const setDataLocationMock = jest.fn();
        useStore.mockReturnValue({ setDataLocation: setDataLocationMock });

        // استفاده از act() برای فراخوانی hook
        const { result } = renderHook(() => useLocation());

        // صبر کردن برای به‌روزرسانی state
        await act(async () => {
            // شبیه‌سازی وضعیت شکست در درخواست
        });

        // بررسی اینکه مقدار error به درستی ست شده باشد
        expect(result.current.error).toBe("Error fetching location");

        // بررسی اینکه setDataLocation برای داده‌های خطا فراخوانی نشده است
        expect(setDataLocationMock).not.toHaveBeenCalled();
    });
});
