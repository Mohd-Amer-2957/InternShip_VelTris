import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class HashMap_Synchronized {
    public static void main(String[] args) {
        
        
        Map<Integer, String> m  = Collections.synchronizedMap(new HashMap<>());



        m.put(1, "Amer");
        m.put(null, "Null key allowed");   // ✔ allowed
        m.put(2, null);                    // ✔ allowed

        System.out.println("Synchronized HashMap: " + m);
    }
}





// Characteristics of Synchronized HashMap:
// 1. It is a thread-safe version of HashMap.
// 2. It allows one null key and multiple null values.
// 3. It does not maintain any order of its elements.
// 4. It provides synchronized access to the map, making it safe for concurrent use by multiple threads.
// 5. It may have performance overhead due to synchronization.
// 7. It uses hashing to store and retrieve data efficiently.
// 8. It is generally slower than non-synchronized HashMap 
