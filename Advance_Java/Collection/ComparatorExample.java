
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparatorExample {

    public static void main(String[] args) {


        // we can also use arrow function to create comparator
        //Comparator<Integer> comp=(i,j)->{};
 

        Comparator<Integer> comp = new Comparator<Integer>() {
            
            // Arrow func for Comparator interface
            // compare is Comparator's method. (defing its body here)

            public int compare(Integer i, Integer j) {
                if (i % 10 > j % 10) {
                    return 1; 
                }else {
                    return -1;
                }
            }
        };


        

        List<Integer> list = new ArrayList<>();

        list.add(15);
        list.add(87);
        list.add(82);
        list.add(19);
        list.add(64);

        // Collections.sort(list);
        Collections.sort(list, comp);   // sorting units place using comparator

        System.out.println("unit's place Sorted List: " + list);

    }
}




// in the abpve code, we created a Comparator to sort integers based on their unit place value.
// created a arrow function for compare method of Comparator interface.
// then we used Collections.sort() method with adding comp of comparator to sort the list accordingly. 




// Comparator Characteristics:

// 1. It is an interface in java.util package.
// 2. It is used to define a custom sorting order for objects.
// 3. It contains two main methods: compare() and equals().
// 4. The compare() method compares two objects and returns a negative integer, zero, or a positive integer.
// 5. It allows sorting based on multiple attributes or criteria.
// 6. It is often used with sorting methods like Collections.sort() and Arrays.sort().
// 7. It can be implemented using anonymous classes, lambda expressions, or method references.
// 8. It provides greater flexibility compared to the Comparable interface, which defines a natural ordering.
// 9. It can be used to sort objects of classes that do not implement Comparable.   
// 10. It is useful in scenarios where different sorting orders are required for the same type of objects.



