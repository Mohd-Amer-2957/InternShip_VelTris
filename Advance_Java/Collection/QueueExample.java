
import java.util.PriorityQueue;
import java.util.Queue;

public class QueueExample {

    public static void main(String[] args) {

        Queue q = new PriorityQueue();

        q.add(10);
        q.add(20);
        q.add(30);
        q.add(30);
        q.poll();    // removes head element

        System.out.println("Queue: " + q);
        q.remove();

        System.out.println("After Remove: " + q);

    }
}

// Queue is Interface and PriorityQueue is a class .
