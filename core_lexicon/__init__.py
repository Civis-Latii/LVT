# A web server is a dockworker
# it waits at a dock for HTTP parcels to arrive
# when they arrive, it checks them and passes them on to a messanger (WSGI)
# the messanger carries them to the flask post office, part of a backend office
# the messanger tells flask which room (function) it should go do, and flask sends it there
# the workers (python logic) then handle the data

# This file (__init__.py) tells sys.path (directory of filepaths python can use)
# that this folder is a package (folder with importable modules and an __init__.py file)