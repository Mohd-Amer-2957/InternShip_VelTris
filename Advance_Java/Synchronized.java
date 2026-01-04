
public class Synchronized {

    static class Counter {

        int count = 0;

        public synchronized void increment() {     // add synchronized to method
            count++;
        }
    }
 


    public static void main(String[] args) {

        Counter c = new Counter();

        Runnable r1 = () -> {                          //Arrow function: lambda expression to create runnable interface object
            for (int i = 1; i <= 10000; i++) {
                c.increment();
            }
        };

        Runnable r2 = () -> {
            for (int i = 1; i <= 10000; i++) {
                c.increment();
            }
        };



        Thread t1 = new Thread(r1);    // creating thread by passing runnable interface object
        Thread t2 = new Thread(r2);

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final count: " + c.count);
    }
;
}

// description of code
// In this code, we demonstrate the use of synchronization in Java to ensure thread safety when multiple threads access a shared resource. We define a Counter class with an increment method that increases the count variable. To prevent race conditions, we synchronize the increment method, ensuring that only one thread can execute it at a time. We create two Runnable instances that each increment the counter 10,000 times. We then create and start two threads using these Runnable instances. After starting the threads, we use the join() method to wait for both threads to finish before printing the final count. This approach ensures that the final count accurately reflects the total number of increments made by both threads without any data corruption due to concurrent access.
// Note: Without synchronization, the final count may be less than expected due to race conditions. 
// By synchronizing the increment method, we ensure that the count variable is updated correctly, demonstrating the importance of synchronization in multi-threaded environments.

// Advantages of synchronization
// 1. Data Integrity: Synchronization ensures that shared resources are accessed in a controlled manner, preventing data corruption and ensuring consistency.
// 2. Thread Safety: It allows multiple threads to work with shared resources without interfering with each other, reducing the risk of unexpected behavior.
// 3. Predictable Behavior: Synchronized code blocks or methods provide a predictable execution order, making it easier to reason about the program's behavior.

