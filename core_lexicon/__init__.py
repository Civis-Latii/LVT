# A web server is a dockworker
# it waits at a dock for HTTP letter-shipments to arrive
# when they arrive it sends the raw data to the flask post office
# then flask translates the parcels and sends them to the python backend

# This file (__init__.py) is necessary to tell sys.path (a directory of valid filepaths accessible by python)
# that this folder is a package, that is, it contains importable modules
# thus, it is a valid filepath