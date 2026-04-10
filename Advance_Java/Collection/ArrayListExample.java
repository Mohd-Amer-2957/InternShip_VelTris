
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {

    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();
        
        nums.add(10);
        nums.add(20);
        nums.add(30);
        nums.add(40);
 
        System.out.println("ArrayList : " + nums);
        System.out.println(nums.indexOf(10));

    }
}


//  ArrayList Characteristics:
// 1. Dynamic Array
// 2. Allows Duplicates
// 3. Maintains Insertion Order
// 4. Not Synchronized
// 5. Allows Random Access
// 6. Implements List Interface
// 7. Default Initial Capacity is 10
// 8. Increases capacity by 50% when full
// 9. Can store null values
// 10. Provides various methods for manipulation (add, remove, get, set, etc.)

