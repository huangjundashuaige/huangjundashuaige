#include<GL/freeglut.h>
GLint width = 600,height = 600;
void paint(void)
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glColor3f (0.0, 1.0, 0.0); // 设置前景色为绿色
    glutSolidCube (1.0);//绘制单位立方体实体
    glColor3f (0.0, 0.0, 0.0); // 设置前景色为黑色
    glLineWidth (2.0); //设置线宽
    glutWireCube(1.0); //绘制单位立方体线框
    glutSwapBuffers();
}

void reshapeFunction(int w, int h)
{
    glViewport(0, 0, w, h);
    width = w;
    height = h;
}
void Init()
{
    //glEnable(GL_DEPTH_TEST);
    glClearColor(1.0, 1.0, 1.0, 0.0f);
    
    gluLookAt(0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
    //glLoadIdentity ();
    //gluLookAt(0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
    //
    glMatrixMode (GL_MODELVIEW);
    //glLoadIdentity ();
    glScalef (2.0, 2.0, 2.0); //比例放缩变换
    //glLoadIdentity ();
    glRotatef(45.0, 0.0, 1.0, 1.0);//旋转变换
    
    glMatrixMode (GL_PROJECTION);
    glLoadIdentity ();
    //glFrustum (-1.0, -1.0, 1.0, 1.0, 1.5, 200.0);
    gluPerspective(45.0f,1,1.5,20.0f);
    //glLoadIdentity ();
    //
    //
    //
}
int main(int argc, char *argv[])
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE);
    glutInitWindowPosition(200,200);
    glutInitWindowSize(width, height);
    glutCreateWindow("Cube");
    Init();
    //glMatrixMode(GL_PROJECTION);
    
    //glFrustum();
    //glutIdleFunc(IdleFunction);
    glutDisplayFunc(paint);
    glutReshapeFunc(reshapeFunction);
    glutMainLoop();
    return 0;

}