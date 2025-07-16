import LoginPassword from "@/components/steps/login/LoginPassword";
import LoginPhoneNumber from "@/components/steps/login/LoginPhoneNumber";
import RegisterFirstName from "@/components/steps/register/RegisterFirstName";
import RegisterLastName from "@/components/steps/register/RegisterLastName";
import RegisterMiddleName from "@/components/steps/register/RegisterMiddleName";
import RegisterPassword from "@/components/steps/register/RegisterPassword";
import RegisterPhoneNumber from "@/components/steps/register/RegisterPhoneNumber";

export const LoginComponents = [
  <LoginPhoneNumber key={"#u"} />,
  <LoginPassword key={"#qw"} />,
];
export const RegisterComponents = [
  <RegisterFirstName key={"@u"} />,
  <RegisterMiddleName key={"@u"} />,
  <RegisterLastName key={"@nn"} />,
  <RegisterPhoneNumber key={"@zd"} />,
  <RegisterPassword key={"@ok"} />,
];
