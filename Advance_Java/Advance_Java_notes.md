Collection API            

Iterable Interface -> Collection Interface

List -> ArrayList, LinkedList, Vector, Stack
Set -> HashSet, LinkedHashSet, TreeSet
Map -> HashMap, LinkedHashMap, TreeMap, Hashtable, Properties   
Queue -> PriorityQueue, Deque, ArrayDeque



ArrayList Characteristics:

1. Dynamic Array 
2. Allows Duplicates
3. Maintains Insertion Order
4. Not Synchronized
5. Allows Random Access
6. Implements List Interface
7. Default Initial Capacity is 10
8. Increases capacity by 50% when full
9. Can store null values
10. Provides various methods for manipulation (add, remove, get, set, etc.)



 LinkedList Characteristics:

1. Doubly Linked List Structure
2. Allows Duplicates
3. Maintains Insertion Order
4. Not Synchronized
5. Allows Random Access (but slower than ArrayList)
6. Implements List and Deque Interfaces
7. Can store null values 
8. Provides various methods for manipulation (add, remove get, set, etc.)
9. Efficient for Insertions and Deletions (O(1) time complexity for add/remove at ends)
10. Ideal for scenarios with frequent insertions/deletions (e.g., implementing queues, stacks)


  
  
  
    HashSet Characteristics:  (implements Set Interface)

1. Implements Set Interface
2. No Duplicates Allowed
3. Does Not Maintain Insertion Order
4. Allows One Null Value
5. Not Synchronized
6. Uses Hashing for Storage
7. Provides Constant Time Performance for Basic Operations (add, remove, contains)
8. Common Implementations: HashSet, LinkedHashSet, TreeSet
9. HashSet is the Most Commonly Used Implementation
10. Ideal for Scenarios Requiring Uniqueness (e.g., Storing Unique Items)
12. Does Not Guarantee Order of Elements 
13. Performance May Degrade with Excessive Collisions




   HashMap Characteristics:

    1. It stores data in key-value pairs.
    2. It allows one null key and multiple null values.
    3. It does not maintain any order of its elements.
    4. It is not synchronized (not thread-safe).
    5. It provides constant-time performance for basic operations like get() and put().  
    6. It allows duplicate values but not duplicate keys.
    7. It is part of the Java Collections Framework and implements the Map interface.
    8. It uses hashing to store and retrieve data efficiently.
    9. It is generally faster than other Map implementations like TreeMap and LinkedHashMap for most operations.
    10. It is not suitable for applications that require ordered data or thread safety without external synchronization. 
    11. It allows dynamic resizing as elements are added, which helps maintain performance.



if you want to make HashMap synchronized (thread-safe), you can use Collections.synchronizedMap() method.


Characteristics of Synchronized HashMap:  (modern version of Hashtable)

1. It is a thread-safe version of HashMap.
2. It allows one null key and multiple null values.
3. It does not maintain any order of its elements.
4. It provides synchronized access to the map, making it safe for concurrent use by multiple threads.
5. It may have performance overhead due to synchronization.
7. It uses hashing to store and retrieve data efficiently.
8. It is generally slower than non-synchronized HashMap 




Hastable Characteristics:    (Old version of HashMap)

1. It stores data in key-value pairs.
2. It does not allow null keys or null values.
3. It does not maintain any order of its elements.
4. It is synchronized (thread-safe) by default.
5. It provides constant-time performance for basic operations like get() and put().  
6. It allows duplicate values but not duplicate keys.
7.It is generally slower than HashMap due to synchronization overhead.


HasMap vs Hashtable vs Synchronized HashMap:
1. Null Keys and Values:
   - HashMap: Allows one null key and multiple null values.
   - Hashtable: Does not allow null keys or null values.
   - Synchronized HashMap: Allows one null key and multiple null values.
2. Synchronization:
   - HashMap: Not synchronized (not thread-safe).
    - Hashtable: Synchronized (thread-safe) by default.
    - Synchronized HashMap: Synchronized access to the map, making it safe for concurrent use by multiple threads.
3. Performance:
    - HashMap: Faster (no Synchronization).
    - Hashtable: Slower (Synchrozie).
    - Synchronized HashMap: Faster than Hashtable (synchronization).







Inteface:

1.we can create object for interface using anonymous class or lambda expression (for functional interfaces).

2.it supports only for functional interfaces (interfaces with single abstract method).
3.it provides implementation for abstract method of interface.
4.it can access final or effectively final variables of enclosing scope.
5.it cannot have instance variables.
6.it cannot have constructors.
7.it can be used to provide a concise way to implement functional interfaces.
ex:
Comarator<> cm= (i, j) -> {
    return i+j;
};

here Comparator is interface and we are providing implementation for its abstract method using lambda expression.

ex2: 

 below both side is interface

Comparator<> cm= new Comparator<>(){

    public int compare(Integer i, Integer j){
        return i+j;
    }
};