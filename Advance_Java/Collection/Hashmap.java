
import java.util.HashMap;
import java.util.Map;

public class Hashmap {

    public static void main(String[] args) {

        Map<Integer, String> map = new HashMap<>();
        

        map.put(1, "Mohd amer");
        map.put(2, "pardha");
        map.put(3, "amzath");
        map.put(4, "513");
        map.put(null, "nullkey");        // null key only one is allowed
        map.put(6, null);                // null value
        map.put(7, null);               // another null value
        map.put(5, "");
        System.out.println(map.size());

        map.put(2, "khan");   // updating value for key 2

       
       
        System.out.println("HashMap: " + map); 

         // Iterating through keys and values

        for (Integer key : map.keySet()) {
            System.out.println("Key: " + key + ", Value: " + map.get(key));
            
            
            // if (key != null && key == 1) {
            //     System.out.println("Value is 1: " + map.get(key));
            // }
        }

        map.clear();
    }
}


// Characteristics of HashMap:
// 1. It stores data in key-value pairs.
// 2. It allows one null key and multiple null values.
// 3. It does not maintain any order of its elements.
// 4. It is not synchronized (not thread-safe).
// 5. It provides constant-time performance for basic operations like get() and put().  
// 6. It allows duplicate values but not duplicate keys.
// 7. It is part of the Java Collections Framework and implements the Map interface.
// 8. It uses hashing to store and retrieve data efficiently.
// 9. It is generally faster than other Map implementations like TreeMap and LinkedHashMap for most operations.
// 10. It is not suitable for applications that require ordered data or thread safety without external synchronization. 
    // 11. It allows dynamic resizing as elements are added, which helps maintain performance.


// if you want to make HashMap synchronized (thread-safe), you can use Collections.synchronizedMap() method.
