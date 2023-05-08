import React from 'react';
import { Image } from 'antd';

interface DataType {

    width: number,
    height?: number,
    src: string
}
const ImageAdmin: React.FC<DataType> = (props: DataType) => {
    const {width, src, height} = props;

    return (
        <Image
          width={width}
          height={height}
          src={src}

        />
      )
};

export default ImageAdmin;