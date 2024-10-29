export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) return -1;
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        const lastVal = this.data[this.length];
        this.data[0] = lastVal;
        this.heapifyDown(0);
        return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parentVal = this.data[parentIdx];
        const currVal = this.data[idx];
        if (parentVal > currVal) {
            this.data[parentIdx] = currVal;
            this.data[idx] = parentVal;
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        const rIdx = this.rightChild(idx);
        const lIdx = this.leftChild(idx);
        if (idx >= this.length || lIdx >= this.length) return;

        const rVal = this.data[rIdx];
        const lVal = this.data[lIdx];
        const currVal = this.data[idx];

        // find smallest child value and swap
        if (lVal > rVal && currVal > rVal) {
            this.data[rIdx] = currVal;
            this.data[idx] = rVal;
            this.heapifyDown(rIdx);
        } else if (rVal > lVal && currVal > lVal) {
            this.data[lIdx] = currVal;
            this.data[idx] = lVal;
            this.heapifyDown(lIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
