import React from 'react'
import { Photo, photos } from './Photo'
import PhotoCard from './PhotoCard'
import { Grid } from '@radix-ui/themes'


export default function PhotosGallery() {
    return (
        <Grid className='mx-auto' columns="4" gap="5" rows='repeat(3 5px)' width="90%">
            {
                photos.map((photo) => {
                    return (
                        <PhotoCard key={photo.name} photo={photo} />
                    )
                })
            }
        </Grid>
    )
}
