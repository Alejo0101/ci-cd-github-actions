pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    def nodeImage = docker.image('node:18')
                    nodeImage.pull() // Por si acaso no está descargada
                    nodeImage.inside {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def nodeImage = docker.image('node:18')
                    nodeImage.inside {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Build Success') {
            steps {
                echo 'Build completed successfully!'
            }
        }
    }
}
