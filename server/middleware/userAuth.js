import Jwt  from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token){
        return res.json({
            success: false,
            message: 'Not Authorized Login Again'
        });
    }

    try {
        
        const tokenDecod = Jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecod.id){
            req.body.userId = tokenDecod.id
        }else{
            return res.json({
                success: false,
                message: 'Not Authorized. Login Again'
            });
        }

        next();
    } catch (error) {
        res.json({
            success:false,
            message: error.message
        })
    }
}

export default userAuth;