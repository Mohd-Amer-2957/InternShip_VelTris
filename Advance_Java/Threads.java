
public class Threads {

    static class A extends Thread {

        public void run() {
            for (int i = 1; i <= 50; i++) {
                System.out.println("hello ");
                try {
                    Thread.sleep(2);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    static class B extends Thread {

        public void run() {
            for (int i = 1; i <= 50; i++) {
                System.out.println("hi ");

            }
        }
    }

    public static void main(String[] args) {

        A t1 = new A();
        B t2 = new B();

        t1.start();
        t2.start();

        System.out.println(t1.getPriority());
    }
}

// thread deafult priority = 5
// min priority = 1 max priority = 10
// main thread priority = 5     
// t1.setPriority(Thread.MIN_PRIORITY); // 1
// t2.setPriority(Thread.MAX_PRIORITY); // 10   
