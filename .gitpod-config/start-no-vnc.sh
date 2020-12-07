#!/bin/bash
sleep 3
feh --bg-center /workspace/test-with-gitpod/.gitpod-config/gondola-logo-1.png
/opt/novnc/utils/launch.sh --vnc "localhost:5900" --listen "6080"