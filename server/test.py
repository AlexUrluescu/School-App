
import threading

event = threading.Event()

def myFunction(name):
    print(f"Waiting for event to trigger {name}...")
    event.wait()

    print(f"Performing action xyz now for threading {name}")


t1 = threading.Thread(target=myFunction, args=(1,))
t1.start()

x = input("Do you want to trigger the event? (y/n)")

if x == "y":
    event.set()