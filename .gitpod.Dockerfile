FROM selenium/standalone-chrome-debug

USER root

# Prepare env
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - 
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt-get upgrade -y && apt-get install -y git nodejs yarn iputils-ping traceroute && apt clean all

# Install novnc
RUN git clone https://github.com/novnc/noVNC.git /opt/novnc \
    && git clone https://github.com/novnc/websockify /opt/novnc/utils/websockify
COPY novnc-index.html /opt/novnc/index.html

# Set background image
RUN wget https://gondolatest.com/wp-content/uploads/2019/02/gondola-logo-1.png && feh --bg-center gondola-logo-1.png

# Sample token
ENV G_LS_TOKEN=63F3AD4E1DD2268360BCBD700CA0E6CD9E12F4429B6D1E79C4C3FD55FF721C78
ENV BROWSER=google-chrome
# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
