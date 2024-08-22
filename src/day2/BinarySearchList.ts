export default function bs_list(haystack: number[], needle: number): boolean {
    let offset = 0;
    let len = haystack.length;
    do {
        const mid = Math.floor(offset + (len - offset) / 2);
        const value = haystack[mid];
        if (value === needle) return true;
        else if (value < needle) offset = mid + 1;
        else len = mid;
    } while (offset < len);
    return false;
}
