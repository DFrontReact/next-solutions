import Image from 'next/image'

export default function MyImage() {
    return (
        <div>
            <Image
                src="/images/gato.png"
                alt="My image"
                width={500}
                height={500}
            />
        </div>
    )
}