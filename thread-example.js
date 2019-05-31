var Thread = Java.type("java.lang.Thread")
var t = new Thread(function run() {
   print("Run in a separate thread")
})

print("Main thread")

t.start()
t.join()
