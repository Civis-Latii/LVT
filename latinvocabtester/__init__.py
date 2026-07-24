# The frontend sends a parcel (HTTP request) towards where the backend lives
# the parcel is unloaded at a port (the physical port) by a dockworker (web server).
# The dockworker also does some admin (preparing the port, ensuring the parcel meets security regulations, etc.)
# The dockworker hands the parcel, with metadata, off to a messanger (WSGI)
# the messanger brings it to an office (the backend)
# they drop it off in the post office desk in the office (flask), 
# and tell them which room it is for (this is the metadata).
# Flask sends it to the correct room (the function)
# and the workers in the room (the logic) handle the package (now data)