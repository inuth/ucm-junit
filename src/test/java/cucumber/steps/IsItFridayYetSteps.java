package cucumber.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.junit.Assert;


public class IsItFridayYetSteps {

    private String isItFridayYet(String day){
        return day.toLowerCase().equals("friday") ? "YES" : "NO";
    }

    String day;
    String result;

    @Given("today is {word}")
    public void todayIs(String day){
        this.day = day;
    }

    @When("I ask if it is Friday yet")
    public void IAskIfItIsFridayYet(){
        result = isItFridayYet(day);
    }

    @Then("I get a {word}")
    public void IGetA(String response){
        Assert.assertEquals(response, result);
    }

}
