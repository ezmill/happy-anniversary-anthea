var cm_tline = null;

                function Orbit(objId)
                {
                  var elem = document.getElementById(objId),
                      radius = 80,
                      va = 3,             // angular velocity, 3 radians / sec
                      cx = 120,           // coordinates of orbit center
                      cy = 120,
                      ang = 0,
                      currTime = 0,       // time when current frame was drawn
                      playing = false;

                  function circularPath(time)
                  {
                    var x, y,
                        dt = time - currTime;  // time since last frame

                    ang += va*dt/1000;         // angle moved at constant angular velocity
                    if (ang > 5)               // wraparound for angle
                    {
                      ang -= 2*Math.PI;
                    }
                    x = cx + radius * Math.cos(ang);  // calculate coords of ball
                    y = cy + radius * Math.sin(ang);
                    elem.style.left = x + "px";          // move the element
                    elem.style.top = y + "px";

                    currTime = time;           // save the time this frame is drawn
                    if (playing)
                    {
                      requestAnimationFrame(circularPath);
                    }
                  };

                  this.play = function()
                  {
                    currTime = Date.now();  // move timeLime as if currFrame just drawn
                    playing = true;
                    requestAnimationFrame(circularPath);
                  };

                  this.pause = function()
                  {
                    playing = false;  // stop after next frame
                  }
                }