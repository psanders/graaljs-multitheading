import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;

public class JSLauncher {

    static public void main(String... args) {
        new JSLauncher().launch(args[0]);
    }

    public void launch(String scriptName) {
        Context polyglot = Context
          .newBuilder()
          .allowExperimentalOptions(true)
          .allowIO(true)
          .allowAllAccess(true).build();

          polyglot.eval("js", "const System = Java.type('java.lang.System');"
            + "load(System.getProperty('user.dir') + '/" + scriptName + "')");
    }

}
