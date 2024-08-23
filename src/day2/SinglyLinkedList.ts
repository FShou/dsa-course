type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    at(idx: number): Node<T> | undefined {
        if (!this.head) return undefined;
        let node = this.head;
        for (let i = 0; i < idx; ++i) {
            if (!node.next) return undefined;
            node = node.next;
        }
        return node;
    }
    prepend(item: T): void {
        this.length++;
        const node: Node<T> = {
            value: item,
            next: this.head,
        };
        this.head = node;
        if (this.length === 1) {
            this.tail = node;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx < this.length || idx >= length) return;
        this.length++;
        const at = this.at(idx);
        const node: Node<T> = {
            value: item,
            next: at,
        };
        if (this.head === at) {
            this.head = node;
            this.tail = at;
        }
    }
    append(item: T): void {
        this.length++;
        const node: Node<T> = {
            value: item,
        };
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (!this.head) return undefined;
        let node = this.head;
        if (node.value === item) {
            this.length--;
            this.head = node.next;
            return node.value;
        }
        while (node.next !== undefined) {
            if (node.next.value === item) break;
            node = node.next;
        }
        if (!node.next) return undefined;
        // Before the actual think
        this.length--;
        const willRemove = node.next;
        node.next = willRemove.next;

        return willRemove.value;
    }
    get(idx: number): T | undefined {
        return this.at(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) return undefined;
        let node = this.head;

        if (idx === 0) {
            this.length--;
            this.head = node.next;
            return node.value;
        }

        // traverse to before idx
        for (let i = 0; i < idx - 1; ++i) {
            if (!node.next) return undefined;
            node = node.next;
        }

        if (!node.next) return undefined;

        this.length--;
        const willRemoved = node.next;
        if (willRemoved === this.tail) {
            this.tail = node;
            return;
        }
        node.next = willRemoved.next;
        return willRemoved.value;
    }
}
