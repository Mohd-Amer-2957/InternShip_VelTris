
import java.util.HashSet;
import java.util.Set;

public class SetExample {

    public static void main(String[] args) {

        Set nums = new HashSet();
        nums.add(10);       
        nums.add(20);
        nums.add(30);
        // nums.add("Hello");
        nums.add(40);
        nums.add(10);            // Duplicate, will be ignored

        System.out.println("Sets: " + nums);    // no guaranteed order

        for(Object o : nums){
            System.out.println(o);
        }

        System.out.println(nums.hashCode());   // prints hash code of the set 
    }
}   




//  Set Characteristics:

// 1. No Duplicates Allowed
// 2. Does Not Maintain Insertion Order (except LinkedHashSet)  
// 3. Not Synchronized
// 4. No Random Access (no get() method)
// 5. Implements Set Interface
// 6. Can store null values (only one null allowed)
// 7. Provides various methods for manipulation (add, remove, contains, size, etc.)
// 8. Common Implementations: HashSet, LinkedHashSet, TreeSet
// 9. HashSet uses hashing for storage, LinkedHashSet maintains insertion order, TreeSet sorts elements
// 10. Ideal for scenarios where uniqueness is required (e.g., storing unique items)
