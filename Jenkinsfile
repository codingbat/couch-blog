node {
  def nodeHome
  stage('Preparation') {
    git branch: 'develop',
      url: 'https://github.com/naz-mul/couch-blog.git'

    nodeHome = tool 'nodejs610'
    env.PATH = "${env.PATH}:${nodeHome}/bin"

    sh 'npm install --global bower'
    sh 'npm install --global grunt-cli'
    sh 'npm install --global karma-cli'

    sh 'npm install'
    sh 'bower install'
  }

  stage('Build') {
    sh 'grunt build'
  }

  stage('Test') {
    sh 'grunt test'
  }
}
