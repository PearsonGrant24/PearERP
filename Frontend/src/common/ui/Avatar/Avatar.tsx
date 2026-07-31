import "./Avatar.css";

type AvatarProps = {
    src: string;
    alt?: string;
    size?: number;
};

export default function Avatar({
    src,
    alt = "Avatar",
    size = 40,
}: AvatarProps) {

    return (
        <img
            className="avatar"
            src={src}
            alt={alt}
            style={{
                width: size,
                height: size,
            }}
        />
    );
}