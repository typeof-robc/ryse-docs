# Support

{% callout type="success" %}
Contact **rob@typeof.agency** or **scott@typeof.agency** for portal support if your answer cannot be found
{% /callout %}

# Error Codes

Error codes represent reponses from the Ryse API. Codes are used to avoid sharing verbose information with users. Verbose information is a security risk and so therefore the codes
are used to obfuscate the error that has occurred.

### 1003

{% callout %}
Reset password failed
{% /callout %}

**Type**: Login

**Why**: Password resest failure

**Solution**: Please contact rob@typeof.agency

### 1004

{% callout %}
An error has occurred. Contact your Ryse representative at info@ryseinc.ca
{% /callout %}

**Type**: Registration

**Why**: Customer tries to register a company that already exists

**Solution**: Try a password reset for the company owners account.

### 1005

{% callout %}
Contact your Ryse representative at info@ryseinc.ca to add this user.
{% /callout %}
**Type**: Account - Users

**Why**: Customer tries to create a user from outside of their company email domain.

**Solution**: Can't create users with different email domains. e.g. me@example.com can't create a user for you@me.com

### 1006

{% callout %}
An error has occurred. Contact your Ryse representative at info@ryseinc.ca
{% /callout %}
**Type**: Registration

**Why**: email already exists in the system. Someone likely tried to register previously.

**Solution**: Try a password reset

### 1007

{% callout %}
1007: Please contact your Ryse representative at info@ryseinc.ca to create your account.
{% /callout %}
**Type**: Registration

**Why**: Account creation failed for an unknown reason

**Solution**: Please contact **rob@typeof.agency**

### 1008

{% callout %}
1008: Please contact your Ryse representative at info@ryseinc.ca for help setting up your account.
{% /callout %}
**Type**: Registration

**Why**: Company is trying to register with a phone number that already exists in the system.

**Solution**: An account might already exist for that phone number. Search users by phone number and if a user exists, send a password reset.

### 1009

{% callout %}
1009: Please contact your Ryse representative for help logging in.
{% /callout %}
**Type**: Login

**Why**: The users account is deactivated.

**Solution**: Activate the account.
