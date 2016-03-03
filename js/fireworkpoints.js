function getFireworkPoints(x,y,type){
    var fire=[]; //要return 的fireworPoint陣列
    var tmpNum; 
    var angle=0;
    var i,j;
    var color=hsvRand(1);
    var time;
    var delayTime=0; //default 0
    var invisibleTime=0;//default 0
    var speed=0;
    var friction=0;// default 0
    if(type==1){//1
        tmpNum=rand(200)+200;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:color,
                radius:rand(2),
                timeMax:rand(400)+800,
                acceler:0.0003
            }));
    }
    else if(type==2){//2
        color=hsvRand(2);
        tmpNum=200;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.3),
                angle:rand(PI2),
                color:color,
                radius:rand(2),
                timeMax:rand(100)+200,
                acceler:0.0003
            }));
    }
    else if(type==3){//3
        color=hsvRand(2);
        tmpNum=1500;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(1)>0.3?rand(0.5)+0.15:rand(0.5),
                angle:rand(PI2),
                color:color,
                radius:rand(2),
                timeMax:rand(1000)+600,
                acceler:0.0003
            }));
        tmpNum=500;
        color='rgb(255, 255, 255)';
        for(i=0;i<tmpNum;i++){
            time=rand(300)+300;
            fire.push(new FireworkPoint({
                x:x-500+rand(1000),
                y:y+100+rand(600),
                color:'rgb(255, 255, 255)',
                radius:rand(2),
                timeMax:1610+time,
                acceler:0,
                invisibleTime:1600+time
            }));
        }
    }
    else if(type==4){//4
        color=hsvRand(2);
        tmpNum=720;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:0.5,
                angle:PI2*i/tmpNum,
                color:color,
                radius:rand(2),
                timeMax:rand(200)+800,
                acceler:0.0003
            }));
    }
    else if(type==5){//5
        color=hsvRand(2);
        tmpNum=720;
        for(i=0;i<8;i++)
            for(j=0;j<tmpNum/8;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:0.5,
                    angle:PI2*(i/8+(rand(15)+15)/360),
                    color:color,
                    radius:rand(2),
                    timeMax:rand(200)+800,
                    acceler:0.0003
                }));
    }
    else if(type==6){//6
        color=hsvRand(3,[142,234,342,298,204,116]);
        speed=0.13;
        tmpNum=5;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                angle=deg2rad(j/tmpNum*360+rand(15));
                for(var k=0;k<10;k++)
                    fire.push(new FireworkPoint({
                        x:x,
                        y:y,
                        velocity:speed+i/32-0.015+rand(0.03)-k/15*0.02,
                        angle:angle,
                        color:color,
                        radius:(-abs(k-5)+5)/5*2,
                        timeMax:rand(200)+800,
                        acceler:0.0001
                    }));
            }
            tmpNum+=5;
        }
        color=hsv(60);
        speed=0.04;
        tmpNum=4;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                angle=deg2rad(j/tmpNum*360+rand(30));
                for(k=0;k<15;k++)
                    fire.push(new FireworkPoint({
                        x:x,
                        y:y,
                        velocity:speed+i/32-0.015+rand(0.03)-k/15*0.02,
                        angle:angle,
                        color:color,
                        radius:(-abs(k-15)+15)/15*1,
                        timeMax:rand(200)+800,
                        acceler:0.0001
                    }));
            }
            tmpNum+=3;
        }
    }
    else if(type==7){//7
        var arr=[60,62,64,90,128,146,240,300];
        var col=arr[Math.floor(rand(arr.length))];
        color=hsv(col);
        var white=false;
        if(col==60 || col==62 || col==64 || col==90 || col==128 ||col==146)
            white=true;
        var random=24+Math.floor(rand(16));
        var gravity=0.0001;
        angle=deg2rad(rand(360));
        for(i=0;i<random;i++){
            angle=angle+deg2rad(360/random+rand(5));
            speed=0.3+rand(0.2);
            friction=0.00045+rand(0.0001);
            for(k=0;k<50;k++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:k/50*speed,
                    angle:angle + deg2rad(rand(2)),
                    color:(k/100*speed<0.05 && rand(1)>0.6 && white) || ((col==60 || col==62 || col==64) && rand(1)>0.65)?'rgb(255,255,255)':color,
                    radius:(-abs(k-25)+25)/25*2,
                    timeMax:rand(200)+400,
                    acceler:gravity+0.0002*k/100
                }));
        }
    }
    else if(type==8){//8
        var arealen;
        for(k=0;k<500;k++){
            arealen=rand(200)+k/5;
            angle=rand(360);
            time=rand(300)+300;
            fire.push(new FireworkPoint({
                x:x+arealen*cos(angle),
                y:y+arealen*sin(angle),
                color:'rgb(255,255,255)',
                radius:rand(2),
                timeMax:time+10,
                invisibleTime:time
            }));
        }
    }
    else if(type==9){//9
        angle=rand(60);
        delayTime=250+rand(250);
        tmpNum=100;
        for(j=0;j<6;j++){
            color=hsvRand(2);
            delayTime=350+rand(350);
            for(i=0;i<tmpNum;i++)
                fire.push(new FireworkPoint({
                    x:x+100*cos(angle+60*j),
                    y:y+100*sin(angle+60*j),
                    velocity:rand(0.3),
                    angle:rand(PI2),
                    color:color,
                    radius:rand(2),
                    timeMax:rand(100)+200,
                    delay:delayTime,
                    acceler:0.0003
                }));
        }
    }
    else if(type==0){//0
        angle=rand(60);
        for(k=0;k<6;k++){
            color=hsvRand(2);
            delayTime=400+rand(200);
            tmpNum=0;
            var len=100+rand(100);
            for(i=0;i<6;i++){
                for(j=0;j<tmpNum;j++){
                    time=rand(100)+300;
                    fire.push(new FireworkPoint({
                        x:x+len*cos(angle+60*k),
                        y:y+len*sin(angle+60*k),
                        velocity:i/16-0.03+rand(0.06),
                        angle:deg2rad(j/tmpNum*360),
                        color:color,
                        radius:rand(2),
                        timeMax:rand(100)+300,
                        delay:delayTime
                    }));
                }
                tmpNum+=8;
            }
        }
    }
    else if(type==10){//a
        var colAngle=rand(80)+300;
        color=hsv(colAngle);
        delayTime=0;
        for(k=0;k<90;k++){
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.15*(sqrt(0.5-sin(4*k)/2)+Math.pow(2.718281828,-10*abs(4*k/360*PI2-PI2*0.75)-1.8)),
                angle:deg2rad(-4*k),
                color:color,
                timeMax:rand(100)+800
            });
        }
        pushBigPoint(fire,{
            x:x,
            y:y,
            velocity:0.15*(sqrt(0.5-sin(270)/2)+Math.pow(2.718281828,-10*abs(270/360*PI2-PI2*0.75)-1.8)),
            angle:deg2rad(90),
            color:color,
            timeMax:rand(100)+800
        });
    }
    else if(type==11){//b
        colAngle=rand(360);
        color=hsv(colAngle);
        var angle2=rand(6);
        for(k=0;k<60;k++)
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.4+rand(0.02),
                angle:deg2rad(6*k+angle2),
                color:color,
                timeMax:rand(100)+600,
                alpha:1
            });
    }
    else if(type==12){//c
        arr=[0,40,60,75,90,105,120,240,270,300];
        colAngle=arr[Math.floor(rand(arr.length))];
        color=hsv(colAngle);
        for(k=0;k<60;k++)
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.5+rand(0.5),
                angle:deg2rad(rand(360)),
                color:color,
                timeMax:rand(200)+300,
                friction:0.0025,
                alpha:1
            });
    }
    else if(type==13){//d
        arr=[0,40,60,90,120,180,210,225,230,235,240,242,243,244,245,270,300];
        colAngle=arr[Math.floor(rand(arr.length))];
        color=hsv(colAngle);
        for(k=0;k<100;k++)
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.5+rand(0.3),
                angle:rand(PI2),
                color:color,
                timeMax:rand(200)+300,
                friction:0.0025,
                alpha:1
            });
        color='rgb(255,255,255)';
        for(k=0;k<100;k++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:0.1+rand(0.4),
                angle:rand(PI2),
                color:color,
                radius:3.1,
                timeMax:rand(200)+300,
                friction:0.0025
            }));
    }
    else if(type==14){//e
        colAngle=rand(360);
        color=hsv(colAngle);
        colAngle=colAngle+90+rand(60);
        var tmpColor1=hsv(colAngle);
        colAngle=colAngle+90+rand(60);
        var tmpColor2=hsv(colAngle);
        tmpNum=rand(200)+200;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:color,
                radius:rand(2),
                timeMax:rand(400)+800,
                acceler:0.0003
            }));
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:tmpColor1,
                radius:rand(2),
                timeMax:rand(400)+800,
                acceler:0.0003
            }));
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:tmpColor2,
                radius:rand(2),
                timeMax:rand(400)+800,
                acceler:0.0003
            }));
    }
    else if(type==15){//f
        colAngle=rand(360);
        color=hsv(colAngle);
        colAngle=colAngle+90+rand(60);
        tmpColor1=hsv(colAngle);
        colAngle=colAngle+90+rand(60);
        tmpColor2=hsv(colAngle);
        tmpNum=rand(200)+200;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:color,
                radius:rand(2),
                timeMax:rand(400)+400,
                acceler:0.0003
            }));
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:tmpColor1,
                radius:rand(2),
                timeMax:rand(400)+400,
                acceler:0.0003
            }));
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:rand(0.5),
                angle:rand(PI2),
                color:tmpColor2,
                radius:rand(2),
                timeMax:rand(400)+400,
                acceler:0.0003
            }));
        color=hsvRand(2);
        tmpNum=0;
        for(k=0;k<6;k++){
            for(j=0;j<tmpNum;j++)
                pushBigPoint(fire,{
                    x:x,
                    y:y,
                    velocity:k/16-0.03+rand(0.06),
                    angle:rand(PI2),
                    color:color,
                    radius:rand(2),
                    timeMax:rand(400)+400,
                    acceler:0.0003
                });
            tmpNum+=6;
        }
    }
    else if(type==16){//g
        colAngle=rand(360);
        color=hsv(colAngle);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/32-0.015+rand(0.03),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(300)+700
                }));
            tmpNum+=30;
        }
        color=hsv(colAngle+90+rand(60));
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                time=rand(300)+500;
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/16-0.03+rand(0.06),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(2),
                    timeMax:rand(200)+300+time,
                    acceler:0.0002,
                    invisibleTime:time
                }));
            }
            tmpNum+=30;
        }
    }
    else if(type==17){//h
        colAngle=rand(360);
        color=hsv(colAngle);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/20-0.024+rand(0.048),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+800,
                    invisibleTime:300+rand(300)
                }));
            tmpNum+=30;
        }
        color=hsv(colAngle+60+rand(30));
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/32-0.015+rand(0.03),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+400
                }));
            tmpNum+=15;
        }
        tmpNum=300;
        color='rgb(255, 255, 255)';
        for(i=0;i<tmpNum;i++){
            len=rand(100);
            theta=rand(360);
            time=550+rand(300);
            fire.push(new FireworkPoint({
                x:x+len*cos(theta),
                y:y+20+len*sin(theta),
                color:color,
                radius:rand(2),
                timeMax:time+10,
                invisibleTime:time
            }));
        }
        tmpNum=800;
        for(i=0;i<tmpNum;i++){
            len=rand(150)+115;
            theta=rand(360);
            time=rand(300)+900;
            fire.push(new FireworkPoint({
                x:x+len*cos(theta),
                y:y+40+len*sin(theta),
                color:color,
                radius:rand(2),
                timeMax:time+10,
                invisibleTime:time
            }));
        }
        tmpNum=200;
        for(i=0;i<tmpNum;i++){
            len=rand(115);
            theta=rand(360);
            time=rand(300)+900;
            fire.push(new FireworkPoint({
                x:x+len*cos(theta),
                y:y+20+len*sin(theta),
                color:color,
                radius:rand(2),
                timeMax:time+10,
                invisibleTime:time
            }));
        }
    }
    else if(type==18){//i
        arealen=0;
        color=hsvRand(2);
        for(k=0;k<60;k++){
            angle=rand(360);
            delayTime=100+rand(300);
            k>=10?arealen+=1.5:arealen+=8;
            var areax=x+arealen*cos(angle);
            var areay=y+arealen*sin(angle);
            fire.push(new FireworkPoint({
                x:areax,
                y:areay,
                color:color,
                radius:3.75,
                timeMax:30,
                delay:delayTime
            }));
            fire.push(new FireworkPoint({
                x:areax,
                y:areay,
                color:'rgb(255,255,255)',
                radius:2,
                timeMax:60,
                delay:delayTime
            }));
        }
    }
    else if(type==19){//j
        arr=[0,30,40,60,85,230,250,340];
        colAngle=arr[Math.floor(rand(arr.length)%arr.length)];
        color=hsv(colAngle);
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/32-0.015+rand(0.03),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+800
                }));
            tmpNum+=24;
        }
        tmpNum=720;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:6/32-rand(0.06),
                angle:deg2rad(i/tmpNum*360+rand(5)),
                color:color,
                radius:rand(1.5),
                timeMax:rand(200)+800
            }));
        colAngle=colAngle+40+rand(20);
        color=hsv(colAngle);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/64-0.0075+rand(0.015),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+800
                }));
            tmpNum+=24;
        }
        tmpNum=720;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:6/64-rand(0.03),
                angle:deg2rad(i/tmpNum*360+rand(5)),
                color:color,
                radius:rand(1.5),
                timeMax:rand(200)+800
            }));
    }
    else if(type==20){//k
        var colorAngle=rand(360);
        color=hsv(colorAngle);
        speed=0.16/3;
        tmpNum=0;
        delayTime=200;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                angle=deg2rad(j/tmpNum*360-15+rand(30));
                for(k=0;k<20;k++)
                    fire.push(new FireworkPoint({
                        x:x,
                        y:y,
                        velocity:0.16/3+i/24-0.02+rand(0.04)-k/20*0.09,
                        angle:angle,
                        color:color,
                        radius:(-abs(k-10)+10)/10*1.5,
                        timeMax:rand(200)+800,
                        delay:200
                    }));
            }
            tmpNum+=5;
        }
        colorAngle=colorAngle+rand(60)+60;
        color=hsv(colorAngle);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/48-0.01+rand(0.02),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+800,
                    delay:200
                }));
            tmpNum+=10;
        }
        colorAngle=colorAngle+rand(60)+60;
        color=hsv(colorAngle);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/24-0.02+rand(0.04),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+800,
                    delay:200
                }));
            tmpNum+=8;
        }
        tmpNum=600;
        for(i=0;i<tmpNum;i++)
            fire.push(new FireworkPoint({
                x:x,
                y:y,
                velocity:1/4-0.04/3-rand(0.08),
                angle:deg2rad(i/tmpNum*360+rand(5)),
                color:color,
                radius:rand(1.5),
                timeMax:rand(200)+800,
                delay:200
            }));
    }
    else if(type==21){//l
        color=hsvRand(2);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                angle=deg2rad(j/tmpNum*360+rand(15));
                for(k=0;k<20;k++){
                    len=rand(115);
                    angle2=rand(360);
                    fire.push(new FireworkPoint({
                        x:x+len*cos(angle2),
                        y:y+len*sin(angle2),
                        velocity:i/16-0.03+rand(0.06)-k/20*0.04,
                        angle:angle,
                        color:color,
                        radius:(-abs(k-10)+10)/10,
                        timeMax:rand(200)+800,
                        invisibleTime:rand(200)
                    }));
                }
            }
            tmpNum+=8;
        }
    }
    else if(type==22){//m
        colAngle=rand(360);
        color=hsv(colAngle);
        colAngle=colAngle+90+rand(60);
        tmpColor1=hsv(colAngle);
        colAngle=colAngle+90+rand(60);
        tmpColor2=hsv(colAngle);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                speed=i/32-0.015+rand(0.03);
                time=rand(200)+500;
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:speed,
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(2),
                    timeMax:time
                }));
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:speed,
                    angle:deg2rad(j/tmpNum*360),
                    color:tmpColor1,
                    radius:rand(2),
                    timeMax:time+500,
                    invisibleTime:time
                }));
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:speed,
                    angle:deg2rad(j/tmpNum*360),
                    color:tmpColor2,
                    radius:rand(2),
                    timeMax:time+1000,
                    invisibleTime:time+500
                }));
            }
            tmpNum+=30;
        }
    }
    else if(type==23){//n
        colorAngle=rand(360);
        color=hsv(colorAngle);
        var colorAngle2=colorAngle+90+rand(60);
        var color2=hsv(colorAngle2);
        var layer=2;
        for(k=1;k<=layer;k++){
            tmpNum=(k-1)*15;
            for(i=0;i<6;i++){
                for(j=0;j<tmpNum;j++){
                    time=rand(200)+600;
                    fire.push(new FireworkPoint({
                        x:x,
                        y:y,
                        velocity:i/32/layer*k-0.015/layer*k+rand(0.03)/layer*k,
                        angle:deg2rad(j/tmpNum*360),
                        color:color,
                        radius:rand(1.2),
                        timeMax:time+k*200
                    }));
                    fire.push(new FireworkPoint({
                        x:x,
                        y:y,
                        velocity:i/32/layer*k-0.015/layer*k+rand(0.03)/layer*k,
                        angle:deg2rad(j/tmpNum*360),
                        color:color2,
                        radius:rand(1.2),
                        timeMax:time+k*200+400,
                        invisibleTime:time+k*200
                    }));
                }
                tmpNum+=15;
            }
            if(k==layer)
                break;
            colorAngle=colorAngle+rand(60)+90;
            color=hsv(colorAngle);
            colorAngle2=colorAngle2+rand(60)+90;
            color2=hsv(colorAngle2);
        }
        arealen=0;
        color=hsv(colorAngle);
        for(k=0;k<30;k++){
            angle=rand(360);
            delayTime=1600+rand(200);
            k>=10?arealen+=1.5:arealen+=8;
            areax=x+arealen*cos(angle);
            areay=y+100+arealen*sin(angle);
            len=1.75;
            theta;
            for(i=0;i<20;i++){
                theta=rand(360);
                fire.push(new FireworkPoint({
                    x:areax+len*cos(theta),
                    y:areay+len*sin(theta),
                    color:color,
                    radius:2,
                    timeMax:10,
                    delay:delayTime
                }));
            }
            fire.push(new FireworkPoint({
                x:areax,
                y:areay,
                color:'rgb(255,255,255)',
                radius:2,
                timeMax:70,
                delay:delayTime
            }));
        }
        arealen=100;
        color=hsv(colorAngle2);
        for(k=0;k<30;k++){
            angle=rand(360);
            delayTime=1600+rand(200);
            k>=10?arealen+=1.5:arealen+=8;
            areax=x+arealen*cos(angle);
            areay=y+100+arealen*sin(angle);
            len=3;
            var theta;
            for(i=0;i<20;i++){
                theta=rand(360);
                fire.push(new FireworkPoint({
                    x:areax+len*cos(theta),
                    y:areay+len*sin(theta),
                    color:color,
                    radius:2,
                    timeMax:10,
                    delay:delayTime
                }));
            }
            fire.push(new FireworkPoint({
                x:areax,
                y:areay,
                color:'rgb(255,255,255)',
                radius:1.5,
                timeMax:70,
                delay:delayTime
            }));
        }
    }
    else if(type==24){//o
        angle=rand(60);
        for(k=0;k<6;k++){
            color=hsvRand(2);
            delayTime=200+rand(200);
            tmpNum=0;
            len=50+rand(100);
            for(i=0;i<6;i++){
                for(j=0;j<tmpNum;j++){
                    invisibleTime=rand(100)+200;
                    fire.push(new FireworkPoint({
                        x:x+len*cos(angle+60*k),
                        y:y+len*sin(angle+60*k),
                        velocity:i/16-0.03+rand(0.06),
                        angle:deg2rad(j/tmpNum*360),
                        color:color,
                        radius:rand(2),
                        timeMax:invisibleTime+20+rand(70),
                        delay:delayTime,
                        invisibleTime:invisibleTime
                    }));
                }
                tmpNum+=8;
            }
        }
    }
    else if(type==25){//p
        angle=rand(60);
        layer=3;
        for(var h=0;h<layer;h++){
            for(k=0;k<6+2*h;k++){
                color=hsvRand(2);
                delayTime=200+300*h;
                tmpNum=0;
                len=50+100*h+rand(25);
                for(i=0;i<6;i++){
                    for(j=0;j<tmpNum;j++){
                        time=rand(100)+300;
                        fire.push(new FireworkPoint({
                            x:x+len*cos(angle+360/(6+2*h)*k),
                            y:y+len*sin(angle+360/(6+2*h)*k),
                            velocity:i/16-0.03+rand(0.06),
                            angle:deg2rad(j/tmpNum*360),
                            color:color,
                            radius:rand(2),
                            timeMax:time,
                            delay:delayTime
                        }));
                    }
                    tmpNum+=8;
                }
            }
        }
    }
    else if(type==26){//q
        color=hsvRand(2);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/8-0.06+rand(0.12),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(1.5),
                    timeMax:rand(200)+2000,
                    acceler:0.0003,
                    friction:0.00005
                }));
            tmpNum+=30;
        }
    }
    else if(type==27){//r
        color=hsvRand(2);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/16-0.03+rand(0.06),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(2),
                    timeMax:rand(100)+250
                }));
            tmpNum+=30;
        }
        for(i=0;i<36;i++){
            time=rand(200)+800;
            for(j=0;j<10;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:0.3+rand(0.02),
                    angle:deg2rad(i*10-1+rand(2)),
                    color:color,
                    radius:rand(2),
                    timeMax:time,
                    invisibleTime:240
                }));
        }
    }
    else if(type==28){//s
        for(k=0;k<60;k++){
            colAngle=rand(360);
            color=hsv(colAngle);
            angle=deg2rad(rand(360));
            delayTime=rand(200);
            invisibleTime=rand(200);
            time=invisibleTime+200;
            speed=0.4+rand(0.2);
            friction=0.0025;
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.4+rand(0.2),
                angle:deg2rad(rand(360)),
                color:color,
                timeMax:invisibleTime+200,
                delay:rand(200),
                invisibleTime:invisibleTime,
                friction:0.0025
            });
        }
    }
    else if(type==29){//t
        tmpNum=360;
        for(i=0;i<6;i++)
            for(j=0;j<tmpNum/6;j++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/24+rand(0.02),
                    angle:PI2*j/(tmpNum/6),
                    color:color,
                    radius:rand(2),
                    timeMax:rand(200)+800
                }));
    }
    else if(type==30){//u
        arr=[60,62,64,90,128,146,240,300];
        col=arr[Math.floor(rand(arr.length))];
        color=hsv(col);
        random=6+Math.floor(rand(4));
        gravity=0.0001;
        angle=deg2rad(rand(360));
        for(i=0;i<random;i++){
            angle=angle+deg2rad(360/random-5+rand(10));
            speed=0.5+rand(0.2);
            friction=0.0006+rand(0.0001);
            for(k=0;k<100;k++)
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:k/100*speed,
                    angle:angle-deg2rad(rand(5)),
                    color:((col==60 || col==62 || col==64) && rand(1)>0.65)?'rgb(255,255,255)':color,
                    radius:(-abs(k-50)+50)/50*2,
                    timeMax:rand(200)+k/100*700,
                    acceler:gravity+0.0006*k/100,
                    friction:friction
                }));
        }
    }
    else if(type==31){//v
        arr=[0,40,60,90,120,210,240,270,300];
        colAngle=arr[Math.floor(rand(arr.length))];
        color=hsv(colAngle);
        for(j=1;j<=3;j++)
            for(k=0;k<45;k++)
                pushBigPoint(fire,{
                    x:x,
                    y:y,
                    velocity:0.13*j+rand(0.05)+0.1,
                    angle:deg2rad(8*k),
                    color:color,
                    timeMax:rand(100)+200*j,
                    invisibleTime:rand(100)+200*(j-1)
                });
    }
    else if(type==32){//w
        color=hsvRand(2);
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                time=rand(400)+2000;
                fire.push(new FireworkPoint({
                    x:x,
                    y:y,
                    velocity:i/8-0.06+rand(0.12),
                    angle:deg2rad(j/tmpNum*360),
                    color:color,
                    radius:rand(2),
                    timeMax:time,
                    acceler:0.0003,
                    friction:0.001
                }));
                fire.push(new FireworkPoint({
                    x:x-500+rand(1000),
                    y:y+100+rand(600),
                    color:'rgb(255,255,255)',
                    radius:rand(2),
                    timeMax:time+30,
                    acceler:0,
                    invisibleTime:time+20
                }));
            }
            tmpNum+=60;
        }
    }
    else if(type==33){//x
        color=hsvRand(2);
        tmpNum=0;
        delayTime=0;
        for(k=0;k<6;k++){
            for(j=0;j<tmpNum;j++)
                pushBigPoint(fire,{
                    x:x,
                    y:y,
                    velocity:k/16-0.03+rand(0.06),
                    angle:rand(PI2),
                    color:color,
                    timeMax:rand(100)+400
                });
            tmpNum+=6;
        }
    }
    else if(type==34){//y
        tmpNum=0;
        for(i=0;i<6;i++){
            for(j=0;j<tmpNum;j++){
                angle=deg2rad(j/tmpNum*360+rand(15));
                for(k=0;k<10;k++)
                    fire.push(new FireworkPoint({
                        x:x,
                        y:y,
                        velocity:i/24+rand(0.01)-k/40*0.08,
                        angle:angle,
                        color:color,
                        radius:(-abs(k-5)+5)/5*2,
                        timeMax:rand(200)+800,
                        acceler:0.0001
                    }));
            }
            tmpNum+=8;
        }
    }
    else if(type==35){//z
        colAngle=rand(360);
        color=hsv(colAngle);
        delayTime=0;
        for(k=0;k<60;k++)
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.2,
                angle:deg2rad(6*k),
                color:color,
                timeMax:rand(200)+800,
                alpha:0.8
            });
        angle2=-10+rand(30);
        for(k=0;k<20;k++)
            pushBigPoint(fire,{
                x:x,
                y:y,
                velocity:0.1,
                angle:deg2rad(30+angle2+6*k),
                color:color,
                timeMax:rand(200)+800,
                alpha:0.8
            });
        for(h=0;h<2;h++)
            for(k=0;k<10;k++)
                pushBigPoint(fire,{
                    x:x,
                    y:y,
                    velocity:0.04+0.07*k/10,
                    angle:deg2rad(-60+angle2-60*h),
                    color:color,
                    timeMax:rand(200)+800,
                    alpha:0.8
                });
        for(j=0;j<2;j++)
            for(k=0;k<11;k++)
                pushBigPoint(fire,{
                    x:x,
                    y:y,
                    velocity:0.11*cos(30)/cos(30-4*k),
                    angle:j===0?deg2rad(-60+angle2+4*k):deg2rad(-120+angle2-4*k),
                    color:color,
                    timeMax:rand(200)+800,
                    alpha:0.8
                });
    }
    return fire;
}

function pushBigPoint(fire,option){
    fire.push(new FireworkPoint({
        x:option.x || 0,
        y:option.y || 0,
        velocity:option.velocity || 0,
        angle:option.angle || 0,
        color:'rgb(0,0,0)',
        radius:3,
        timeMax:option.timeMax-20 || 0,
        delay:option.delay+10 || 10,
        acceler:option.acceler===undefined?0.00005:option.acceler,
        invisibleTime:option.invisibleTime || 0,
        friction:option.friction || 0
    }));
    fire.push(new FireworkPoint({
        x:option.x || 0,
        y:option.y || 0,
        velocity:option.velocity || 0,
        angle:option.angle || 0,
        color:option.color || 'rgba(255,255,255,0.7)',
        radius:3.1,
        timeMax:option.timeMax || 0,
        delay:option.delay || 0,
        acceler:option.acceler===undefined?0.00005:option.acceler,
        invisibleTime:option.invisibleTime || 0,
        friction:option.friction || 0
    }));
    fire.push(new FireworkPoint({
        x:option.x || 0,
        y:option.y || 0,
        velocity:option.velocity || 0,
        angle:option.angle || 0,
        color:option.alpha===undefined?'rgba(255,255,255,0.7)':'rgba(255,255,255,'+option.alpha+')',
        radius:2,
        timeMax:option.timeMax || 0,
        delay:option.delay || 0,
        acceler:option.acceler===undefined?0.00005:option.acceler,
        invisibleTime:option.invisibleTime || 0,
        friction:option.friction || 0
        }));
}

function hsvRand(type,array){
    var angle;
    var trueState=true;
    if(type==0)
        angle=rand(360);
    else if(type==1){
        while(trueState){//probability densitiy function
            angle=rand(360);
            if(angle>156 && angle<202){
                if(rand(50)>49)
                    break;
            }
            else if(angle>258 && angle<328){
                if(rand(50)>49)
                    break;
            }
            else if(angle>60 && angle<360){
                if(rand(15)>14)
                    break;
            }
            else if(angle>54){
                break;
            }
            else if(angle>40){
                if(rand(8)>7)
                    break;
            }
            else{
                if(rand(8)>7)
                    break;
            }
        }
    }
    else if(type==2){
        while(trueState){//probability densitiy function
            angle=rand(360);
            if(angle>156 && angle<202){
                if(rand(20)>19)
                    break;
            }
            else if(angle>258 && angle<300){
                if(rand(20)>19)
                    break;
            }
            else
                break;
        }
    }
    else if(type==3){
        var len=array.length;
        angle=array[Math.floor(rand(len))];
    }
    return hsv(angle);
}
function hsv(angle){//s: 100% v: 100%
    var s=0.7;
    var v=1;
    var c=v*s;
    var m=v-c;
    var x=c-abs((angle/60)%2-1);
    var hi=( (angle-angle%60) /60 )%6;
    var co=Math.floor(255*(c+m));
    var xo=Math.floor(255*(x+m));
    var mo=Math.floor(255*m);
    if(hi==0)
        return 'rgb('+co+','+xo+','+mo+')';
    else if(hi==1)
        return 'rgb('+xo+','+co+','+mo+')';
    else if(hi==2)
        return 'rgb('+mo+','+co+','+xo+')';
    else if(hi==3)
        return 'rgb('+mo+','+xo+','+co+')';
    else if(hi==4)
        return 'rgb('+xo+','+mo+','+co+')';
    else if(hi==5)
        return 'rgb('+co+','+mo+','+xo+')';
}

function cos(x){
    return Math.cos(2*Math.PI*x/360);
}

function sin(x){
    return Math.sin(2*Math.PI*x/360);
}

function abs(x){
    return Math.abs(x);
}

function deg2rad(x){
    return Math.PI*2*x/360;
}

function rand(x){
    return Math.random()*x;
}

function sqrt(x){
    return Math.sqrt(x);
}

var PI2=Math.PI*2;
