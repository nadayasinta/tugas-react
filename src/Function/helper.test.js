import { tambahangka } from './helper';

test('fungsi tambahangka jika input berupa angka', () => {
    const result = tambahangka(1, 2);
    expect(result).toBe(3);
});
test('fungsi tambahangka jika input berupa huruf', () => {
    const result = tambahangka('a', 2);
    expect(result).toBe(undefined);
});
