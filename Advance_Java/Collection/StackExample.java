
import java.util.Stack;

public class StackExample{
    public static void main(String[] args) {
        
        Stack<Integer> st = new Stack<>();

        st.push(10);
        st.push(20);
        st.push(30);
        System.out.println("Stack: " + st);
        System.out.println("Popped Element: " + st.removeFirst());  // * Stong Doubt, it should not support removeFirst()
        System.out.println("After Pop: " + st);

        int deletedElement = st.pop();
        System.out.println("Deleted Element: " + deletedElement);
        System.out.println(st.getClass());

    }
}
