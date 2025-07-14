{ pkgs }:

{
  packages = [
    # Node.js and package managers
    pkgs.nodejs_18
    pkgs.npm
    pkgs.yarn
    
    # Development tools
    pkgs.git
    pkgs.curl
    pkgs.wget
    
    # Build tools
    pkgs.python3
    pkgs.gcc
    pkgs.gnumake
  ];

  # Preview configuration for 3ari9 web application
  preview = {
    run = "npm run dev"; # Start the development server
    shell = "${pkgs.bash}/bin/bash";
    root = "."; # Project root directory
    ports = [
      {
        source = 3000;
        target = 3000;
      }
      {
        source = 5000;
        target = 5000;
      }
    ];
    externalPorts = [ 3000 5000 ]; # Frontend on 3000, Backend on 5000
  };

  # Environment variables
  env = {
    NODE_ENV = "development";
    PORT = "3000";
    BACKEND_PORT = "5000";
  };

  # Shell hook for setup
  shellHook = ''
    echo "🚀 Welcome to 3ari9 Development Environment!"
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Ready to start development!"
    echo "🌐 Frontend: http://localhost:3000"
    echo "🔧 Backend: http://localhost:5000"
  '';
}