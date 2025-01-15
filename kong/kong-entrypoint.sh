#!/bin/sh
# Run migrations
echo "Running Kong migrations..."
kong migrations bootstrap

# Now start Kong
echo "Starting Kong..."
exec kong reload
