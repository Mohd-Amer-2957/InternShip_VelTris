
public class Threads_vs_Runnable_Interface {

    public static void main(String[] args) {

        Runnable r1 = () -> {                          //Arrow function: lambda expression to create runnable interface object
            for (int i = 1; i <= 5; i++) {
                System.out.println("hello ");
            }
        };

        Runnable r2 = () -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("hi ");
            }
        };

        Thread t1 = new Thread(r1);    // creating thread by passing runnable interface object
        Thread t2 = new Thread(r2);

        t1.start();
        t2.start();

    };
}



// description of code
// In this code, we demonstrate the use of the Runnable interface to create and run threads in Java. We define two Runnable instances using lambda expressions,
// each containing a run method that prints "hello" and "hi" respectively five times. We then create Thread objects by passing these Runnable instances to the Thread constructor.
// Finally, we start both threads using the start() method, which invokes their run methods concurrently. This approach showcases the advantages of using the Runnable interface for thread creation and execution.


// Advantages of Runnable interface over Thread class

// 1. Runnable interface is preferred when you want to extend another class as Java does not support multiple inheritance.
// 2. You can share the same Runnable instance among multiple threads, which is not possible when extending the Thread class.
// 3. It separates the task to be performed from the thread that executes it, promoting better design and code organization.
// 4. It is more flexible as you can implement multiple interfaces along with Runnable, whereas extending Thread limits you to a single inheritance.
// 5. It allows for better resource management since multiple threads can share the same Runnable object, reducing memory overhead.
