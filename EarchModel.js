import React from 'react';
import {
    View,
    AmbientLight,
    asset
} from 'react-360';
import Entity from 'Entity';
export default class Model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          zoom: -70,
          rotation: 130,
          
        };
        this.lastUpdate = Date.now();
    
        this.rotate = this.rotate.bind(this);
      }

      componentDidMount() {
        this.rotate();
    
        console.log(this.state.zoom); 
      }
    
      componentWillUnmount() {
        if (this.frameHandle) {
          cancelAnimationFrame(this.frameHandle);
          this.frameHandle = null;
        }
      }

      rotate() {
        const now = Date.now();
        const delta = now - this.lastUpdate;
        this.lastUpdate = now;
    
        this.setState({
            rotation: this.state.rotation + delta / 200
        });
        this.frameHandle = requestAnimationFrame(this.rotate);
      }

      
    render() {
        return (
            <View>
                <AmbientLight intensity={2.5} />
                {/* <Entity source={{ obj: asset('3d/r2d2/r2d2.obj'), mtl: asset('3d/r2d2/r2d2.mtl') }}
                    lit={true}
                    style={{ transform: [{translate: [20, 0, -120]},{ scale: 10.5 },{ rotateY: 60 }] }}
                /> */}
                {/* <Entity source={{ obj: asset('3d/moon/moon.obj'),mtl:asset('3d/moon/moon.mtl') }}
                    lit={true}
                    style={{ transform: [{translate: [0, 0, -120]},{ scale: 0.3 },{ rotateY: 60 }] }}
                /> */}
                
                <Entity source={{ obj: asset('earth/earth.obj'),mtl:asset('earth/earth.mtl') }}
                    lit={true}
                    style={{ transform: [{translate: [0, 0, -70]},{ scale: 0.2 },
                    { rotateY: 30 },
                    {rotateY: this.state.rotation},
                    // {rotateX: 0},{rotateZ: -10},
                ] }
                }
                />
                
                {/* <Entity source={{ obj: asset('3d/chair/chair.obj'),mtl:asset('3d/chair/chair.mtl') }}
                    lit={true}
                    style={{ transform: [{translate: [0, 0, -70]},{ scale: 0.5 },{ rotateY: 130 },{rotateX: 20},{rotateZ: -10},] }}
                /> */}

                {/* <Entity source={{ obj: asset('earth/earth.obj'), mtl: asset('earth/earth.mtl') }}
                    lit={true}
                    style={{ 
                        transform: [
                            {translate: [0, 0, -70]},
                            {scale: 10.2 },
                            {rotateY: 130},
                            {rotateX: 20},
                            {rotateZ: -10},
                        ]}}
                /> */}

            </View>
        )
    }
}