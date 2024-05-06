$(document).ready(function(){
  newFormatters.sample = function(name, commands) {
    const TAB = "  ";
    var content = '';
    var windowsUIAutomation = "", className = "", tagName = "";
    for (var i = 0; i < commands.length; i++) {
      var command = commands[i];
      var action = command.command;
      var target = command.target;
      var value = command.value;
      var yamlEntry = "";

      var id = "", nameYaml = "", tagName = "", xpath = "";
      var uniqueId = "id" + i; //default value

      if (target.includes("id=")) {
        id = target.substring(3, target.length);
      } else if (target.includes("xpath=")) {
        xpath = target.substring(6, target.length);
      } else if (target.includes("link=")) {
        nameYaml = target.substring(5, target.length);
      } else if (target.includes("http://")) {
        link = target.substring(8, target.length);
      } else if (target.includes("https://")) {
        link = target.substring(9, target.length);
      }

      yamlEntry += uniqueId + ": " + '\n';
      yamlEntry += TAB + "order: " + i + '\n';
      yamlEntry += TAB + "uniqueId: " + uniqueId + '\n';
      yamlEntry += TAB + "action: " + action + '\n';
      yamlEntry += TAB + "id: " + id + '\n';
      yamlEntry += TAB + "windowsUIAutomation: " + windowsUIAutomation + '\n';
      yamlEntry += TAB + "name: " + nameYaml + '\n';
      yamlEntry += TAB + "className: " + className + '\n';
      yamlEntry += TAB + "automationId: " + id + '\n';
      yamlEntry += TAB + "tagName: " + tagName + '\n';
      yamlEntry += TAB + "xpath: " + xpath + '\n';
      yamlEntry += TAB + "link: " + link + '\n';

      content += yamlEntry;
    }
    return {
      content: content,
      extension: 'yaml',
      mimetype: 'text/plain'
    }
  }
})

/*num1Button:
  order: 0
  uniqueId: num1Button
  action: LeftClick
  id: num1Button
  windowsUIAutomation: num1Button
  name: One
  className: Button
  automationId: num1Button
  tagName: Button
  xpath: /Pane[@ClassName='#32769'][@Name='Desktop 1']/Window[@ClassName='ApplicationFrameWindow'][@Name='Calculator']/Window[@ClassName='Windows.UI.Core.CoreWindow'][@Name='Calculator']/Custom[@AutomationId='NavView']/Group[@ClassName='LandmarkTarget']/Group[@Name='Number pad'][@AutomationId='NumberPad']/Button[@Name='One'][@AutomationId='num1Button']
num7Button:
*/