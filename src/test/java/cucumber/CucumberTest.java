package cucumber;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "json:JsonFile/cucumber.json", "junit:JunitFile/cucumber.xml", "html:HtmlFile"},
        features = "src/test/java/cucumber/features",
        tags = {"@fast, @slow"})
public class CucumberTest {
}
