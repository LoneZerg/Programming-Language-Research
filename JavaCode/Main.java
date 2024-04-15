import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

public class Main
{
    public static void main(String[] args) throws IOException
    {
        PrintWriter writer = new PrintWriter("C:\\Users\\alone\\IdeaProjects\\PLC_Java\\Values.txt", StandardCharsets.UTF_8);

        for (int i = 0; i < 1000; i++)
        {
            long startTime = System.nanoTime();
            SampleCode();
            long endTime = System.nanoTime();
            writer.println((endTime-startTime) / (double)1000 / (double)1000); //Convert nanoseconds to microseconds and get average of 1000 run times
        }

        writer.close();
    }

    static void SampleCode()
    {
        for (int i = 0; i < 1000; i++)
        {
        //float f1 = 1.1f, f2 = 1.2f, f3 = 1.3f, f4 = 1.4f, f5 = 1.5f, f6 = 1.6f, f7 = 1.7f, f8 = 1.8f, f9 = 1.9f, f10 = 1.0f; // [1]

        /*var f1 = 1.1f;
        var f2 = 1.2f;
        var f3 = 1.3f;
        var f4 = 1.4f;
        var f5 = 1.5f;
        var f6 = 1.6f;
        var f7 = 1.7f;
        var f8 = 1.8f;
        var f9 = 1.9f;
        var f10 = 1.0f;*/ // [2]

        /*float f1 = 1; // [3]
        float f2 = 2;
        f1 += f2;*/

        /*var f1 = 1; // [4]
        float f2 = 2;
        f2 += f1;*/

        /*int i1 = 1; // [5]
        int i2 = 2;
        i1 += i2;*/

        /*var i1 = 1; // [6]
        int i2 = 2;
        i1 += i2;*/

        /*float f1 = 2.1f, f2 = 3.2f; // [7]
        int i1 = 1, i2 = 2;
        f1 += f2;
        i1 += i2;
        f1 += i1;*/

        /*float f1 = 2.1f, f2 = 3.2f; // [8]
        int i1 = 1, i2 = 2;
        f1 += i1;
        f2 += i2;
        f1 += f2;*/
        }
    }
}