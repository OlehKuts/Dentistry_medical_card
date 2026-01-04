import { Text } from "./text";

export const SimpleBlock = ({ header, content, size = "18px", ...props }) => {
    return (
          <div className="block" >
    <Text size={size} fontWeight="bold" {...props}>
      {header}
    </Text>
         <span className="content">{content}</span>
      </div>
    )
  };