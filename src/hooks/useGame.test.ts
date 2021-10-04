import { renderHook, act } from "@testing-library/react-hooks/dom";
import { useGame } from "./useGame";

describe("useLimitedList", () => {
  it("returns list of elements and addItem method", () => {
    const { result } = renderHook(() => useGame());
    const { field, onClick } = result.current;
    expect(Array.isArray(field)).toBe(true);
    expect(field).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    expect(onClick).toBeInstanceOf(Function);
  });

  it("onClick changes cell state to opposite", () => {
    const { result } = renderHook(() => useGame());

    act(() => result.current.onClick([1, 1]));
    act(() => result.current.onClick([2, 2]));
    act(() => result.current.onClick([3, 3]));

    expect(result.current.field).toEqual([
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ]);

    act(() => result.current.onClick([1, 1]));
    act(() => result.current.onClick([2, 2]));
    act(() => result.current.onClick([3, 3]));

    expect(result.current.field).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});
