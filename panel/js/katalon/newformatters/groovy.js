$(document).ready(function(){
    newFormatters.groovy = function(name, commands) {

        var header = [];
        header.push("import org.junit.*;");
        header.push("import org.openqa.selenium.WebElement;");
        header.push("import org.openqa.selenium.remote.DesiredCapabilities;");
        header.push("import org.snakeyaml.engine.v2.api.*;");
        header.push("import java.net.URL;");
        header.push("import java.util.Map.Entry;");
        header.push("import java.util.concurrent.TimeUnit;");
        header.push("import io.appium.java_client.windows.WindowsDriver;");
        header.push("import org.sikuli.script.Pattern;");
        header.push("import org.sikuli.script.Screen;");
        header.push("import com.siemens.com.husim.justle.Result;");
        header.push("import org.sikuli.script.Screen;");
        header.push("import org.openqa.selenium.interactions.Actions;");
        header.push("\n");
        header.push("import com.siemens.com.husim.justle.*;");
        header.push("import com.siemens.com.husim.justle.script.*;");
        header.push("\n");
        header.push("class UIRecorderScript extends SeleniumBaseScript");
        header.push("{");
        header.push("\t/*");
        header.push("\t * Beware!");
        header.push("\t * Any global variable is shared by the maps running at the same time.");
        header.push("\t * Access to those variables must be synchronized.");
        header.push("\t */");
        header.push("\n");
        header.push("\tResult test(List descriptors)");
        header.push("\t{");
        header.push("\t\tEndpointDescriptor descriptor = descriptors[0];");
        header.push("\t\tWindowsDriver driverSession = descriptor.endpoint.get(\"\" + SeleniumAppGrp.EpGrpVars.DRIVER_SESSION + descriptor.text);");
        header.push("\t\tString yamlFile = parameters.get(\"yamlFile\");");
        header.push("\t\t");
        header.push("\t\t//Use actions to perform double clicks or to send a keyboard sequence: actions.contextClick(\"element\").perform() or actions.sendKeys(\"123456\").perform()");
        header.push("\t\tactions = new Actions(driverSession)");
        header.push("\t\t");

        var commands_ = [];
        for (var i = 0; i < commands.length; i++) {
            commands_.push("\t\tgetWebElement(\"" + "id" + i + "\").click();");
        }

        var footer = [];

        footer.push("\t\treturn Result.Passed;");
        footer.push("\t}");
        footer.push("\n");
        footer.push("}");

        var content = header.join('\n') + "\n" + commands_.join('\n') + "\n" + footer.join('\n');
        return {
            content: content,
            extension: 'groovy',
            mimetype: 'text/plain'
        }
    }
})

