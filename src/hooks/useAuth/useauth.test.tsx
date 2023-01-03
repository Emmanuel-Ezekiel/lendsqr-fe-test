import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage/index";
import axios from "axios";
import { AuthProvider } from "../useAuth/index";
import { renderHook, act } from '@testing-library/react-hooks'

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn()
}));

jest.mock("axios");

const useLocalStorageMock = useLocalStorage as jest.Mock;

describe("AuthProvider", () => {
  it("should store the user details in local storage", async () => {
    useLocalStorageMock.mockReturnValue([null, jest.fn()]);
    (axios.get as jest.Mock).mockResolvedValue({ data: { id: 1 } });

    const { result } = renderHook(() => AuthProvider());

    await result.current.getUserDetails(1);
    expect(useLocalStorageMock).toHaveBeenCalledWith("userDetails", { id: 1 });
  });

  it("should authenticate the user and navigate to the dashboard", () => {
    useLocalStorageMock.mockReturnValue([null, jest.fn()]);
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());

    const { result } = renderHook(() => AuthProvider());

    result.current.login({ id: 1 });
    expect(useLocalStorageMock).toHaveBeenCalledWith("user", { id: 1 });
    expect(useNavigate).toHaveBeenCalledWith("/dashboard/users");
  });

  it("should sign out the logged in user and navigate to the home page", () => {
    useLocalStorageMock.mockReturnValue([{ id: 1 }, jest.fn()]);
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());

    const { result } = renderHook(() => AuthProvider());

    result.current.logout();
    expect(useLocalStorageMock).toHaveBeenCalledWith("user", null);
    expect(useNavigate).toHaveBeenCalledWith("/", { replace: true });
  });
});

