FROM selenium/standalone-chrome-debug

USER root

# Prepare env
RUN apt update && apt-get upgrade -y && apt-get install -y git nodejs npm && apt clean all

# Install novnc
RUN git clone https://github.com/novnc/noVNC.git /opt/novnc \
    && git clone https://github.com/novnc/websockify /opt/novnc/utils/websockify
COPY novnc-index.html /opt/novnc/index.html

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
