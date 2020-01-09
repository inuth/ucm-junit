import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.Ignore;
import org.junit.experimental.runners.Enclosed;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import java.util.Arrays;
import java.util.Collection;

@RunWith(Enclosed.class)
public class FileServiceTest {

    @RunWith(Parameterized.class)
    public static class ParameterizedPart {

        private FileService fs;
        private String fileName;

        @Before
        public void before(){
            fs = new FileService();
        }

        public ParameterizedPart(String fileName){
            this.fileName = fileName;
        }

        @Parameters
        public static Collection<Object[]> data() {
            return Arrays.asList(new Object[][] {
                    { "coucou.txt" }, { "hello.txt" }, {"sushi.txt"}
            });
        }

        @Test
        public void isTextFile_correctNameMin_true(){
            // ARRANGE
            //String name = "coucou.txt";
            // ACT
            boolean isCorrect = fs.isTextFile(fileName);

            // ASSERT
            Assert.assertTrue(isCorrect);
        }
    }


    public static class NotParameterizedPart {

        private FileService fs;

        @Before
        public void before(){
            fs = new FileService();
        }

        @Test
        public void isTextFile_correctNameMaj_true(){
            // ARRANGE
            String name = "coucou.TXT";
            // ACT
            boolean isCorrect = fs.isTextFile(name);

            // ASSERT
            Assert.assertTrue(isCorrect);
        }

        @Test
        public void isTextFile_incorrectName_false(){
            // ARRANGE
            String name = "coucou.jpg";
            // ACT
            boolean isCorrect = fs.isTextFile(name);

            // ASSERT
            Assert.assertFalse(isCorrect);
        }

        @Test(expected = NullPointerException.class)
        public void isTextFile_null_NullPointerException(){
            // ARRANGE
            String name = null;
            // ACT
            boolean isCorrect = fs.isTextFile(name);

        }

        @Test
        public void isTextFile_emptyDotTxt_false(){
            // ARRANGE
            String name = ".txt";
            // ACT
            boolean isCorrect = fs.isTextFile(name);

            // ASSERT
            Assert.assertFalse(isCorrect);
        }
    }








}
