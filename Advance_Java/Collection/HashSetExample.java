
import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        
        HashSet<String> hs = new java.util.HashSet<>();

        hs.add("Apple");
        hs.add("Banana");
        hs.add("Orange");
        hs.add("Apple"); // Duplicate, will not be added
        hs.add(null);   // Adding null value
        System.out.println("HashSet: " + hs);
    }
}


// HashSet Characteristics:
// 1. Implements Set Interface
// 2. No Duplicates Allowed
// 3. Does Not Maintain Insertion Order
// 4. Allows One Null Value
// 5. Not Synchronized
// 6. Uses Hashing for Storage
// 7. Provides Constant Time Performance for Basic Operations (add, remove, contains)
// 8. Common Implementations: HashSet, LinkedHashSet, TreeSet
// 9. HashSet is the Most Commonly Used Implementation
// 10. Ideal for Scenarios Requiring Uniqueness (e.g., Storing Unique Items)
// 12. Does Not Guarantee Order of Elements 
// 13. Performance May Degrade with Excessive Collisions

