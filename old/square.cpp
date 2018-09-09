#define GLEW_STATIC
#include<GL/glut.h>
void renderScene()
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glColor3f(1.0f, 1.0f, 1.0f);
    glRectf(-0.5f, 0.5f, 0.5f, -0.5f);
    glEnd();
    glFlush();
}
int main(int argc,char *argv[])
{
    glutInit(&argc, argv);
    glutCreateWindow("this is a square");
    glutDisplayFunc(renderScene);
    glutMainLoop();
    return 0;
}