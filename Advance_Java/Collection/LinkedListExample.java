
import java.util.LinkedList;

public class LinkedListExample {

    public static void main(String[] args) {

        LinkedList<String> list = new LinkedList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        list.addFirst("Mango");
        list.addLast("Orange");

        System.out.println("LinkedList: " + list);

        list.remove("Banana");
        System.out.println("After Removal: " + list);
        System.out.println("First Element: " + list.getFirst());
        System.out.println("Last Element: " + list.pop() + list);

    }
}

//  LinkedList Characteristics:
// 1. Doubly Linked List Structure
// 2. Allows Duplicates
// 3. Maintains Insertion Order
// 4. Not Synchronized
// 5. Allows Random Access (but slower than ArrayList)
// 6. Implements List and Deque Interfaces
// 7. Can store null values 
// 8. Provides various methods for manipulation (add, remove, get, set, etc.)
// 9. Efficient for Insertions and Deletions (O(1) time complexity for add/remove at ends)
// 10. Ideal for scenarios with frequent insertions/deletions (e.g., implementing queues, stacks)
